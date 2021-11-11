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
                    <a href="index.html" data-type="index-link">ngx-luplink documentation</a>
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
                                            'data-target="#components-links-module-CardModule-9c6faf2fa6736738f6b5f7750e6c36c6"' : 'data-target="#xs-components-links-module-CardModule-9c6faf2fa6736738f6b5f7750e6c36c6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CardModule-9c6faf2fa6736738f6b5f7750e6c36c6"' :
                                            'id="xs-components-links-module-CardModule-9c6faf2fa6736738f6b5f7750e6c36c6"' }>
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
                                            'data-target="#components-links-module-FormModule-9685926bcd26dd41597dcf04e8d1c146"' : 'data-target="#xs-components-links-module-FormModule-9685926bcd26dd41597dcf04e8d1c146"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormModule-9685926bcd26dd41597dcf04e8d1c146"' :
                                            'id="xs-components-links-module-FormModule-9685926bcd26dd41597dcf04e8d1c146"' }>
                                            <li class="link">
                                                <a href="components/FormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-FormModule-9685926bcd26dd41597dcf04e8d1c146"' : 'data-target="#xs-injectables-links-module-FormModule-9685926bcd26dd41597dcf04e8d1c146"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FormModule-9685926bcd26dd41597dcf04e8d1c146"' :
                                        'id="xs-injectables-links-module-FormModule-9685926bcd26dd41597dcf04e8d1c146"' }>
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
                                            'data-target="#components-links-module-LayoutModule-c3d2e963b8ca821625c9862a3ba55d47"' : 'data-target="#xs-components-links-module-LayoutModule-c3d2e963b8ca821625c9862a3ba55d47"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-c3d2e963b8ca821625c9862a3ba55d47"' :
                                            'id="xs-components-links-module-LayoutModule-c3d2e963b8ca821625c9862a3ba55d47"' }>
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
                                        'data-target="#injectables-links-module-LayoutModule-c3d2e963b8ca821625c9862a3ba55d47"' : 'data-target="#xs-injectables-links-module-LayoutModule-c3d2e963b8ca821625c9862a3ba55d47"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LayoutModule-c3d2e963b8ca821625c9862a3ba55d47"' :
                                        'id="xs-injectables-links-module-LayoutModule-c3d2e963b8ca821625c9862a3ba55d47"' }>
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
                                        'data-target="#injectables-links-module-LoggerModule-251daa7447ce16508542faf567afd454"' : 'data-target="#xs-injectables-links-module-LoggerModule-251daa7447ce16508542faf567afd454"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LoggerModule-251daa7447ce16508542faf567afd454"' :
                                        'id="xs-injectables-links-module-LoggerModule-251daa7447ce16508542faf567afd454"' }>
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
                                        'data-target="#injectables-links-module-LuplinkModule-a21612a9cdee1e7becc0891075ba9ab7"' : 'data-target="#xs-injectables-links-module-LuplinkModule-a21612a9cdee1e7becc0891075ba9ab7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LuplinkModule-a21612a9cdee1e7becc0891075ba9ab7"' :
                                        'id="xs-injectables-links-module-LuplinkModule-a21612a9cdee1e7becc0891075ba9ab7"' }>
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
                                            'data-target="#components-links-module-NavbarModule-35cbf9c30f58918ae0e6ed0fdcc5b1fd"' : 'data-target="#xs-components-links-module-NavbarModule-35cbf9c30f58918ae0e6ed0fdcc5b1fd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NavbarModule-35cbf9c30f58918ae0e6ed0fdcc5b1fd"' :
                                            'id="xs-components-links-module-NavbarModule-35cbf9c30f58918ae0e6ed0fdcc5b1fd"' }>
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
                                            'data-target="#components-links-module-NavigationSidebarModule-9288ee2e25197b3c6772e29074153ff9"' : 'data-target="#xs-components-links-module-NavigationSidebarModule-9288ee2e25197b3c6772e29074153ff9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NavigationSidebarModule-9288ee2e25197b3c6772e29074153ff9"' :
                                            'id="xs-components-links-module-NavigationSidebarModule-9288ee2e25197b3c6772e29074153ff9"' }>
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
                                            'data-target="#components-links-module-ResultSidebarModule-450bf0d4cef8cb67a4ac0f3c7c1246da"' : 'data-target="#xs-components-links-module-ResultSidebarModule-450bf0d4cef8cb67a4ac0f3c7c1246da"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ResultSidebarModule-450bf0d4cef8cb67a4ac0f3c7c1246da"' :
                                            'id="xs-components-links-module-ResultSidebarModule-450bf0d4cef8cb67a4ac0f3c7c1246da"' }>
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
                                            'data-target="#components-links-module-SimpleDocumentationModule-a0b91b16c8aa171826de3a0a534a7dcc"' : 'data-target="#xs-components-links-module-SimpleDocumentationModule-a0b91b16c8aa171826de3a0a534a7dcc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SimpleDocumentationModule-a0b91b16c8aa171826de3a0a534a7dcc"' :
                                            'id="xs-components-links-module-SimpleDocumentationModule-a0b91b16c8aa171826de3a0a534a7dcc"' }>
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
                                            'data-target="#components-links-module-StepbarModule-cd0c5b58c3b59913dad1aaccb4d646e6"' : 'data-target="#xs-components-links-module-StepbarModule-cd0c5b58c3b59913dad1aaccb4d646e6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StepbarModule-cd0c5b58c3b59913dad1aaccb4d646e6"' :
                                            'id="xs-components-links-module-StepbarModule-cd0c5b58c3b59913dad1aaccb4d646e6"' }>
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
                                            'data-target="#components-links-module-SynthesisModule-ba23888b92e6197cd98efcadbf562906"' : 'data-target="#xs-components-links-module-SynthesisModule-ba23888b92e6197cd98efcadbf562906"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SynthesisModule-ba23888b92e6197cd98efcadbf562906"' :
                                            'id="xs-components-links-module-SynthesisModule-ba23888b92e6197cd98efcadbf562906"' }>
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
                                            'data-target="#components-links-module-SyntheticDrawingModule-b18fd1572da411a3dd0da8e4fe7cb322"' : 'data-target="#xs-components-links-module-SyntheticDrawingModule-b18fd1572da411a3dd0da8e4fe7cb322"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SyntheticDrawingModule-b18fd1572da411a3dd0da8e4fe7cb322"' :
                                            'id="xs-components-links-module-SyntheticDrawingModule-b18fd1572da411a3dd0da8e4fe7cb322"' }>
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
                                        'data-target="#injectables-links-module-SyntheticDrawingModule-b18fd1572da411a3dd0da8e4fe7cb322"' : 'data-target="#xs-injectables-links-module-SyntheticDrawingModule-b18fd1572da411a3dd0da8e4fe7cb322"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SyntheticDrawingModule-b18fd1572da411a3dd0da8e4fe7cb322"' :
                                        'id="xs-injectables-links-module-SyntheticDrawingModule-b18fd1572da411a3dd0da8e4fe7cb322"' }>
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
                                            'data-target="#components-links-module-WelcomeModule-1af3c3984ebd40f3ccf329acda0d40e5"' : 'data-target="#xs-components-links-module-WelcomeModule-1af3c3984ebd40f3ccf329acda0d40e5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WelcomeModule-1af3c3984ebd40f3ccf329acda0d40e5"' :
                                            'id="xs-components-links-module-WelcomeModule-1af3c3984ebd40f3ccf329acda0d40e5"' }>
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
                                <a href="classes/emptyForm.html" data-type="entity-link" >emptyForm</a>
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
                                <a href="interfaces/AbstractControlWarn.html" data-type="entity-link" >AbstractControlWarn</a>
                            </li>
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
                                <a href="interfaces/Validity.html" data-type="entity-link" >Validity</a>
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
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
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