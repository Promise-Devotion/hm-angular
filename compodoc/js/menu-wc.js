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
                    <a href="index.html" data-type="index-link">huamao-angular documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="请输入查询关键字"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>入门指南</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>概述
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>手册
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>依赖项
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>属性列表
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">模块列表</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-0c306acbb165e95751516a2c7202f27ac0b1dd626b27eb92cf4cf174a16486d8775d6b1f9963b7e6a544c23ea76a0684f24aad2203b46ef0bef3d3ec52595410"' : 'data-target="#xs-components-links-module-AppModule-0c306acbb165e95751516a2c7202f27ac0b1dd626b27eb92cf4cf174a16486d8775d6b1f9963b7e6a544c23ea76a0684f24aad2203b46ef0bef3d3ec52595410"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>组件列表</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-0c306acbb165e95751516a2c7202f27ac0b1dd626b27eb92cf4cf174a16486d8775d6b1f9963b7e6a544c23ea76a0684f24aad2203b46ef0bef3d3ec52595410"' :
                                            'id="xs-components-links-module-AppModule-0c306acbb165e95751516a2c7202f27ac0b1dd626b27eb92cf4cf174a16486d8775d6b1f9963b7e6a544c23ea76a0684f24aad2203b46ef0bef3d3ec52595410"' }>
                                            <li class="link">
                                                <a href="components/AnimationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AnimationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BasicKnowledgeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BasicKnowledgeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Child2Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Child2Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Child3Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Child3Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DatapatchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatapatchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/Demo1Component.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Demo1Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HttprequestComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HttprequestComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LearningComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LearningComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LifecycleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LifecycleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LifedemoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LifedemoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavigationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavigationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NewsdetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewsdetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProductComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProductComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RxjslearnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RxjslearnComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ServiceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ServiceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SettingComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SettingComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TestComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TestComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TransitionComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TransitionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WelcomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WelcomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-0c306acbb165e95751516a2c7202f27ac0b1dd626b27eb92cf4cf174a16486d8775d6b1f9963b7e6a544c23ea76a0684f24aad2203b46ef0bef3d3ec52595410"' : 'data-target="#xs-injectables-links-module-AppModule-0c306acbb165e95751516a2c7202f27ac0b1dd626b27eb92cf4cf174a16486d8775d6b1f9963b7e6a544c23ea76a0684f24aad2203b46ef0bef3d3ec52595410"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>可注入的</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-0c306acbb165e95751516a2c7202f27ac0b1dd626b27eb92cf4cf174a16486d8775d6b1f9963b7e6a544c23ea76a0684f24aad2203b46ef0bef3d3ec52595410"' :
                                        'id="xs-injectables-links-module-AppModule-0c306acbb165e95751516a2c7202f27ac0b1dd626b27eb92cf4cf174a16486d8775d6b1f9963b7e6a544c23ea76a0684f24aad2203b46ef0bef3d3ec52595410"' }>
                                        <li class="link">
                                            <a href="injectables/StorageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StorageService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-AppModule-0c306acbb165e95751516a2c7202f27ac0b1dd626b27eb92cf4cf174a16486d8775d6b1f9963b7e6a544c23ea76a0684f24aad2203b46ef0bef3d3ec52595410"' : 'data-target="#xs-pipes-links-module-AppModule-0c306acbb165e95751516a2c7202f27ac0b1dd626b27eb92cf4cf174a16486d8775d6b1f9963b7e6a544c23ea76a0684f24aad2203b46ef0bef3d3ec52595410"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>管道列表</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-AppModule-0c306acbb165e95751516a2c7202f27ac0b1dd626b27eb92cf4cf174a16486d8775d6b1f9963b7e6a544c23ea76a0684f24aad2203b46ef0bef3d3ec52595410"' :
                                            'id="xs-pipes-links-module-AppModule-0c306acbb165e95751516a2c7202f27ac0b1dd626b27eb92cf4cf174a16486d8775d6b1f9963b7e6a544c23ea76a0684f24aad2203b46ef0bef3d3ec52595410"' }>
                                            <li class="link">
                                                <a href="pipes/FormatterDatePipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormatterDatePipe</a>
                                            </li>
                                            <li class="link">
                                                <a href="pipes/FormatterSexPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormatterSexPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>可注入的</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/StorageService.html" data-type="entity-link" >StorageService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>其他</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">变量</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>路由列表</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>文档概览</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});