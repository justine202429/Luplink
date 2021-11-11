'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">luplink documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/CardModule.html" data-type="entity-link" >CardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CardModule-cc27721aea44a94aae8315e4f49f9d6e"' : 'data-target="#xs-components-links-module-CardModule-cc27721aea44a94aae8315e4f49f9d6e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CardModule-cc27721aea44a94aae8315e4f49f9d6e"' :
                                            'id="xs-components-links-module-CardModule-cc27721aea44a94aae8315e4f49f9d6e"' }>
                                            <li class="link">
                                                <a href="components/CardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormModule.html" data-type="entity-link" >FormModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-FormModule-a0fc2d1a2ec65d9a535e32368c87af8a"' : 'data-target="#xs-components-links-module-FormModule-a0fc2d1a2ec65d9a535e32368c87af8a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormModule-a0fc2d1a2ec65d9a535e32368c87af8a"' :
                                            'id="xs-components-links-module-FormModule-a0fc2d1a2ec65d9a535e32368c87af8a"' }>
                                            <li class="link">
                                                <a href="components/FormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-FormModule-a0fc2d1a2ec65d9a535e32368c87af8a"' : 'data-target="#xs-injectables-links-module-FormModule-a0fc2d1a2ec65d9a535e32368c87af8a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FormModule-a0fc2d1a2ec65d9a535e32368c87af8a"' :
                                        'id="xs-injectables-links-module-FormModule-a0fc2d1a2ec65d9a535e32368c87af8a"' }>
                                        <li class="link">
                                            <a href="injectables/FormService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LoggerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoggerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link" >LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LayoutModule-e83b60dde62a3020a24b980f240cf9b6"' : 'data-target="#xs-components-links-module-LayoutModule-e83b60dde62a3020a24b980f240cf9b6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-e83b60dde62a3020a24b980f240cf9b6"' :
                                            'id="xs-components-links-module-LayoutModule-e83b60dde62a3020a24b980f240cf9b6"' }>
                                            <li class="link">
                                                <a href="components/JSatOrbLinkComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JSatOrbLinkComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LayoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LayoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LayoutModule-e83b60dde62a3020a24b980f240cf9b6"' : 'data-target="#xs-injectables-links-module-LayoutModule-e83b60dde62a3020a24b980f240cf9b6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LayoutModule-e83b60dde62a3020a24b980f240cf9b6"' :
                                        'id="xs-injectables-links-module-LayoutModule-e83b60dde62a3020a24b980f240cf9b6"' }>
                                        <li class="link">
                                            <a href="injectables/JSatOrbLinkService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JSatOrbLinkService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoggerModule.html" data-type="entity-link" >LoggerModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LoggerModule-fad45b5ebde6946423b8ff11bf153564"' : 'data-target="#xs-injectables-links-module-LoggerModule-fad45b5ebde6946423b8ff11bf153564"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LoggerModule-fad45b5ebde6946423b8ff11bf153564"' :
                                        'id="xs-injectables-links-module-LoggerModule-fad45b5ebde6946423b8ff11bf153564"' }>
                                        <li class="link">
                                            <a href="injectables/LoggerService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoggerService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LuplinkModule.html" data-type="entity-link" >LuplinkModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LuplinkModule-302677304f4d6d48f0904dab3123b6ea"' : 'data-target="#xs-injectables-links-module-LuplinkModule-302677304f4d6d48f0904dab3123b6ea"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LuplinkModule-302677304f4d6d48f0904dab3123b6ea"' :
                                        'id="xs-injectables-links-module-LuplinkModule-302677304f4d6d48f0904dab3123b6ea"' }>
                                        <li class="link">
                                            <a href="injectables/ComputeLinkBudgetService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ComputeLinkBudgetService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SaveLoadService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SaveLoadService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NavbarModule.html" data-type="entity-link" >NavbarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NavbarModule-0e9b881a8b9da4ffd45c71f60741b405"' : 'data-target="#xs-components-links-module-NavbarModule-0e9b881a8b9da4ffd45c71f60741b405"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NavbarModule-0e9b881a8b9da4ffd45c71f60741b405"' :
                                            'id="xs-components-links-module-NavbarModule-0e9b881a8b9da4ffd45c71f60741b405"' }>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NavigationSidebarModule.html" data-type="entity-link" >NavigationSidebarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NavigationSidebarModule-c6514c7341e7178538525d5c77a3e8a9"' : 'data-target="#xs-components-links-module-NavigationSidebarModule-c6514c7341e7178538525d5c77a3e8a9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NavigationSidebarModule-c6514c7341e7178538525d5c77a3e8a9"' :
                                            'id="xs-components-links-module-NavigationSidebarModule-c6514c7341e7178538525d5c77a3e8a9"' }>
                                            <li class="link">
                                                <a href="components/NavigationSidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavigationSidebarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResultSidebarModule.html" data-type="entity-link" >ResultSidebarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ResultSidebarModule-85e0f5f1384303dacd9d5ea29c3bd79c"' : 'data-target="#xs-components-links-module-ResultSidebarModule-85e0f5f1384303dacd9d5ea29c3bd79c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ResultSidebarModule-85e0f5f1384303dacd9d5ea29c3bd79c"' :
                                            'id="xs-components-links-module-ResultSidebarModule-85e0f5f1384303dacd9d5ea29c3bd79c"' }>
                                            <li class="link">
                                                <a href="components/ResultSidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResultSidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResultsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResultsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SimpleDocumentationModule.html" data-type="entity-link" >SimpleDocumentationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SimpleDocumentationModule-9c1af5d5bbd5c5fa777dae3bcad9cbdd"' : 'data-target="#xs-components-links-module-SimpleDocumentationModule-9c1af5d5bbd5c5fa777dae3bcad9cbdd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SimpleDocumentationModule-9c1af5d5bbd5c5fa777dae3bcad9cbdd"' :
                                            'id="xs-components-links-module-SimpleDocumentationModule-9c1af5d5bbd5c5fa777dae3bcad9cbdd"' }>
                                            <li class="link">
                                                <a href="components/SimpleDocumentationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SimpleDocumentationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StepbarModule.html" data-type="entity-link" >StepbarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StepbarModule-9a24a946f9ae8ce3b771cc7f295af8f1"' : 'data-target="#xs-components-links-module-StepbarModule-9a24a946f9ae8ce3b771cc7f295af8f1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StepbarModule-9a24a946f9ae8ce3b771cc7f295af8f1"' :
                                            'id="xs-components-links-module-StepbarModule-9a24a946f9ae8ce3b771cc7f295af8f1"' }>
                                            <li class="link">
                                                <a href="components/StepbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StepbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SynthesisModule.html" data-type="entity-link" >SynthesisModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SynthesisModule-a2e269cda4e98476e672f82c08eadc75"' : 'data-target="#xs-components-links-module-SynthesisModule-a2e269cda4e98476e672f82c08eadc75"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SynthesisModule-a2e269cda4e98476e672f82c08eadc75"' :
                                            'id="xs-components-links-module-SynthesisModule-a2e269cda4e98476e672f82c08eadc75"' }>
                                            <li class="link">
                                                <a href="components/SynthesisComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SynthesisComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SyntheticDrawingModule.html" data-type="entity-link" >SyntheticDrawingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SyntheticDrawingModule-e96c16f689673f34869e9f4140df46a2"' : 'data-target="#xs-components-links-module-SyntheticDrawingModule-e96c16f689673f34869e9f4140df46a2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SyntheticDrawingModule-e96c16f689673f34869e9f4140df46a2"' :
                                            'id="xs-components-links-module-SyntheticDrawingModule-e96c16f689673f34869e9f4140df46a2"' }>
                                            <li class="link">
                                                <a href="components/SyntheticDrawingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SyntheticDrawingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SyntheticDrawingFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SyntheticDrawingFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SyntheticDrawingModule-e96c16f689673f34869e9f4140df46a2"' : 'data-target="#xs-injectables-links-module-SyntheticDrawingModule-e96c16f689673f34869e9f4140df46a2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SyntheticDrawingModule-e96c16f689673f34869e9f4140df46a2"' :
                                        'id="xs-injectables-links-module-SyntheticDrawingModule-e96c16f689673f34869e9f4140df46a2"' }>
                                        <li class="link">
                                            <a href="injectables/SyntheticDrawingFormService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SyntheticDrawingFormService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ToastrTestingModule.html" data-type="entity-link" >ToastrTestingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WelcomeModule.html" data-type="entity-link" >WelcomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WelcomeModule-cfb002a82d3a3d448350d23d07ccd1f7"' : 'data-target="#xs-components-links-module-WelcomeModule-cfb002a82d3a3d448350d23d07ccd1f7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WelcomeModule-cfb002a82d3a3d448350d23d07ccd1f7"' :
                                            'id="xs-components-links-module-WelcomeModule-cfb002a82d3a3d448350d23d07ccd1f7"' }>
                                            <li class="link">
                                                <a href="components/WelcomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WelcomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Antennas.html" data-type="entity-link" >Antennas</a>
                            </li>
                            <li class="link">
                                <a href="classes/CustomRouteReuseStrategy.html" data-type="entity-link" >CustomRouteReuseStrategy</a>
                            </li>
                            <li class="link">
                                <a href="classes/DrawingDefault.html" data-type="entity-link" >DrawingDefault</a>
                            </li>
                            <li class="link">
                                <a href="classes/EmptyForm.html" data-type="entity-link" >EmptyForm</a>
                            </li>
                            <li class="link">
                                <a href="classes/FormControlWarn.html" data-type="entity-link" >FormControlWarn</a>
                            </li>
                            <li class="link">
                                <a href="classes/FormsTemplate.html" data-type="entity-link" >FormsTemplate</a>
                            </li>
                            <li class="link">
                                <a href="classes/HelperFunctions.html" data-type="entity-link" >HelperFunctions</a>
                            </li>
                            <li class="link">
                                <a href="classes/LinkBudgetScenario.html" data-type="entity-link" >LinkBudgetScenario</a>
                            </li>
                            <li class="link">
                                <a href="classes/LogEntry.html" data-type="entity-link" >LogEntry</a>
                            </li>
                            <li class="link">
                                <a href="classes/MockComputeService.html" data-type="entity-link" >MockComputeService</a>
                            </li>
                            <li class="link">
                                <a href="classes/MockFormService.html" data-type="entity-link" >MockFormService</a>
                            </li>
                            <li class="link">
                                <a href="classes/MockupLoggerService.html" data-type="entity-link" >MockupLoggerService</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ComputeLinkBudgetService.html" data-type="entity-link" >ComputeLinkBudgetService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomValidators.html" data-type="entity-link" >CustomValidators</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MockToastPackage.html" data-type="entity-link" >MockToastPackage</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Antenna.html" data-type="entity-link" >Antenna</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AntennaField.html" data-type="entity-link" >AntennaField</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Field.html" data-type="entity-link" >Field</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Form.html" data-type="entity-link" >Form</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LinkBudgetComponent.html" data-type="entity-link" >LinkBudgetComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LuplinkConfig.html" data-type="entity-link" >LuplinkConfig</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Point.html" data-type="entity-link" >Point</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Template.html" data-type="entity-link" >Template</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/WarnFn.html" data-type="entity-link" >WarnFn</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});