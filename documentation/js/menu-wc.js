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
                    <a href="index.html" data-type="index-link">potter-storre-test documentation</a>
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
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-68f341f136cc90933fad91cc66ffb6dd0667987bb3e1ebe522a81a532fa10902ed9a1515bcab947fda78dc597e56dab6891b1c2fea9e39af9fa61a653b22be0f"' : 'data-bs-target="#xs-components-links-module-AppModule-68f341f136cc90933fad91cc66ffb6dd0667987bb3e1ebe522a81a532fa10902ed9a1515bcab947fda78dc597e56dab6891b1c2fea9e39af9fa61a653b22be0f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-68f341f136cc90933fad91cc66ffb6dd0667987bb3e1ebe522a81a532fa10902ed9a1515bcab947fda78dc597e56dab6891b1c2fea9e39af9fa61a653b22be0f"' :
                                            'id="xs-components-links-module-AppModule-68f341f136cc90933fad91cc66ffb6dd0667987bb3e1ebe522a81a532fa10902ed9a1515bcab947fda78dc597e56dab6891b1c2fea9e39af9fa61a653b22be0f"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardListBookComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardListBookComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardListMoviesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardListMoviesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardListPotionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardListPotionsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardListSpellsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CardListSpellsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormLogginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormLogginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormPedidoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormPedidoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormRegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormRegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ListPedidoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ListPedidoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PagesWikiBookComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PagesWikiBookComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PagesWikiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PagesWikiComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-68f341f136cc90933fad91cc66ffb6dd0667987bb3e1ebe522a81a532fa10902ed9a1515bcab947fda78dc597e56dab6891b1c2fea9e39af9fa61a653b22be0f"' : 'data-bs-target="#xs-injectables-links-module-AppModule-68f341f136cc90933fad91cc66ffb6dd0667987bb3e1ebe522a81a532fa10902ed9a1515bcab947fda78dc597e56dab6891b1c2fea9e39af9fa61a653b22be0f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-68f341f136cc90933fad91cc66ffb6dd0667987bb3e1ebe522a81a532fa10902ed9a1515bcab947fda78dc597e56dab6891b1c2fea9e39af9fa61a653b22be0f"' :
                                        'id="xs-injectables-links-module-AppModule-68f341f136cc90933fad91cc66ffb6dd0667987bb3e1ebe522a81a532fa10902ed9a1515bcab947fda78dc597e56dab6891b1c2fea9e39af9fa61a653b22be0f"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UserServiceService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserServiceService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppServerModule.html" data-type="entity-link" >AppServerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppServerModule-5bcee7eb2b711f5c785bb67ccc221b7bc2a29e283665fa61008eccb388bced6e15979c5f0b140bd8bfa298d0a1f1cedcedd0db64343a7ccee8b13d1902c70338"' : 'data-bs-target="#xs-components-links-module-AppServerModule-5bcee7eb2b711f5c785bb67ccc221b7bc2a29e283665fa61008eccb388bced6e15979c5f0b140bd8bfa298d0a1f1cedcedd0db64343a7ccee8b13d1902c70338"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppServerModule-5bcee7eb2b711f5c785bb67ccc221b7bc2a29e283665fa61008eccb388bced6e15979c5f0b140bd8bfa298d0a1f1cedcedd0db64343a7ccee8b13d1902c70338"' :
                                            'id="xs-components-links-module-AppServerModule-5bcee7eb2b711f5c785bb67ccc221b7bc2a29e283665fa61008eccb388bced6e15979c5f0b140bd8bfa298d0a1f1cedcedd0db64343a7ccee8b13d1902c70338"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SharedModule-48829571f0d328fddf924054a658917e527e779f939024625d7c31ca865d2d4daef1700fabd2ebfdbc502d914b6bf1e9d9d347194cb1b8e045b1bec0de4afb22"' : 'data-bs-target="#xs-components-links-module-SharedModule-48829571f0d328fddf924054a658917e527e779f939024625d7c31ca865d2d4daef1700fabd2ebfdbc502d914b6bf1e9d9d347194cb1b8e045b1bec0de4afb22"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-48829571f0d328fddf924054a658917e527e779f939024625d7c31ca865d2d4daef1700fabd2ebfdbc502d914b6bf1e9d9d347194cb1b8e045b1bec0de4afb22"' :
                                            'id="xs-components-links-module-SharedModule-48829571f0d328fddf924054a658917e527e779f939024625d7c31ca865d2d4daef1700fabd2ebfdbc502d914b6bf1e9d9d347194cb1b8e045b1bec0de4afb22"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarCarritoComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarCarritoComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SidebarMenuComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SidebarMenuComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BookServicesService.html" data-type="entity-link" >BookServicesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CartService.html" data-type="entity-link" >CartService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HarryPotterServices.html" data-type="entity-link" >HarryPotterServices</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserServiceService.html" data-type="entity-link" >UserServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserSessionService.html" data-type="entity-link" >UserSessionService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Attributes.html" data-type="entity-link" >Attributes</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Attributes-1.html" data-type="entity-link" >Attributes</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Character.html" data-type="entity-link" >Character</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Datum.html" data-type="entity-link" >Datum</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DatumLinks.html" data-type="entity-link" >DatumLinks</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/DatumLinks-1.html" data-type="entity-link" >DatumLinks</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IBook.html" data-type="entity-link" >IBook</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Libro.html" data-type="entity-link" >Libro</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/libros.html" data-type="entity-link" >libros</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LibrosLinks.html" data-type="entity-link" >LibrosLinks</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Meta.html" data-type="entity-link" >Meta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Meta-1.html" data-type="entity-link" >Meta</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/movie.html" data-type="entity-link" >movie</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Pagination.html" data-type="entity-link" >Pagination</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Pagination-1.html" data-type="entity-link" >Pagination</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/pedido.html" data-type="entity-link" >pedido</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/pelicula.html" data-type="entity-link" >pelicula</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Potion.html" data-type="entity-link" >Potion</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PotionResponse.html" data-type="entity-link" >PotionResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Spells.html" data-type="entity-link" >Spells</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SpellsLinks.html" data-type="entity-link" >SpellsLinks</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/usuario.html" data-type="entity-link" >usuario</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
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
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});