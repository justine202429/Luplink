import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { faAngleLeft, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import sanitize from 'sanitize-filename';
import ComputeLinkBudgetService from '../../services/compute-link-budget.service';
import { SaveLoadService } from '../../services/save-load.service';
import { FormService } from '../../form/form.service';
import { LoggerService } from '../../shared/logger/logger.service';
import { ENVIRONMENT_TOKEN } from '../../shared/dependencies';
// import { environment } from 'projects/luplink-app/src/environments/environment';

@Component({
  selector: 'lib-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('titleInput') titleInput?: ElementRef;

  title = 'Luplink-v0.2';
  // For now debug mode disables the reload warning. Debug mode is disabled automatically in prod mode but can be disabled manually
  debugMode = false;
  public isMenuBarVisible = false;
  private _isNanospaceEnabled = true;
  get isNanospaceEnabled(): boolean {
    return this._isNanospaceEnabled;
  }
  set isNanospaceEnabled(value: boolean) {
    this.environment.enableNanospace = value;
    this._isNanospaceEnabled = value;
  }
  angleLeft = faAngleLeft;
  public isEditingTitle: boolean = false;
  public pencil = faPencilAlt;
  public loading: boolean = false;
  public globalFormValue: FormGroup = new FormGroup({});
  constructor(
    @Inject(ENVIRONMENT_TOKEN) private environment: any,
    private saveLoadService: SaveLoadService,
    public computeLinkBudget: ComputeLinkBudgetService,
    public formService: FormService,
    public logger: LoggerService
  ) {
    this.isNanospaceEnabled = this.environment.enableNanospace;
    if (!this.formService.isInitialized) this.formService.initForms();
    this.formService.getFormData$().subscribe((value: FormGroup) => {
      this.globalFormValue = value;
    });
  }
  onBlur($event: any): void {
    // We use the sanitize-filename node module to make sure everything is fine with the selected fileName (length, characters, ...)
    this.formService.title = sanitize($event.target.value);
    this.isEditingTitle = false;
  }

  editTitle() {
    this.isEditingTitle = true;
    setTimeout(() => {
      // this will make the execution after the above boolean has changed
      this.titleInput?.nativeElement.focus();
    }, 0);
  }

  ngOnInit(): void {
    this.logger.info('Logging is enabled');
    // Prevent the user from losing data if he hasn't saved the current scenario
    // if (!this.debugMode) {
    window.addEventListener('beforeunload', (event) => {
      if (!this.formService.isCurrentFormSaved) {
        event.preventDefault();
        // eslint-disable-next-line no-param-reassign
        // event.returnValue = 'Unsaved modifications';
      }
      return event;
    });
    // }
  }
  save() {
    this.saveLoadService.exportConfigFile(this.formService.getFormData());
  }

  load(files: FileList | null) {
    if (files) {
      this.saveLoadService.importConfigFile(files);
    }
  }
  compute() {
    const obs = this.computeLinkBudget.computeLinkBudget();
    if (obs) {
      this.loading = true;
      const subscription = obs.subscribe(
        (value) => {
          // this.logger.debug('value', value);
          this.computeLinkBudget.updateResult(value);
          // this.logger.debug("API response:", value)
          this.loading = false;
          subscription?.unsubscribe();
        },
        (err) => {
          this.loading = false;
          this.logger.debug('error in compute()', err);
          subscription?.unsubscribe();
        }
      );
    }
  }
}
