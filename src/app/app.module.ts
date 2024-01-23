import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { ComposantsComponent } from './composants/composants.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { DetailArticleComponent } from './composants/detail-article/detail-article.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { DetailNouvelArticleComponent } from './composants/detail-nouvel-article/detail-nouvel-article.component';
import { BouttonNouvelArticleComponent } from './composants/boutton-nouvel-article/boutton-nouvel-article.component';
import { BouttonActionComponent } from './composants/boutton-action/boutton-action.component';
import { PageMvtStkComponent } from './pages/page-mvt-stk/page-mvt-stk.component';
import { MvtBtnComponent } from './composants/mvt-btn/mvt-btn.component';
import { DtailMvtStkComponent } from './composants/dtail-mvt-stk/dtail-mvt-stk.component';
import { ColMvtComponent } from './composants/col-mvt/col-mvt.component';
import { CorrectionComponent } from './pages/correction/correction.component';
import { DetailCltFrsComponent } from './composants/detail-clt-frs/detail-clt-frs.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { FournisseurComponent } from './pages/fournisseurs/fournisseur.component';
import { NouveauCltFrsComponent } from './composants/nouveau-clt-frs/nouveau-clt-frs.component';
import { DetailCmdCltFrsComponent } from './composants/detail-cmd-clt-frs/detail-cmd-clt-frs.component';
import { NouvelCommandeCltFrsComponent } from './composants/nouvel-commande-clt-frs/nouvel-commande-clt-frs.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { NouvelcategorieComponent } from './composants/nouvelcategorie/nouvelcategorie.component';
import { UtilisateursComponent } from './pages/utilisateurs/utilisateurs.component';
import { NouvelutilisateurComponent } from './composants/nouvelutilisateur/nouvelutilisateur.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { ChangerMdpComponent } from './pages/changer-mdp/changer-mdp.component';



@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashboardComponent,
    PageStatistiquesComponent,
    ComposantsComponent,
    MenuComponent,
    HeaderComponent,
    PageArticleComponent,
    DetailArticleComponent,
    PaginationComponent,
    NouvelArticleComponent,
    DetailNouvelArticleComponent,
    BouttonNouvelArticleComponent,
    BouttonActionComponent,
    PageMvtStkComponent,
    MvtBtnComponent,
    DtailMvtStkComponent,
    ColMvtComponent,
    CorrectionComponent,
    DetailCltFrsComponent,
    ClientsComponent,
    FournisseurComponent,
    NouveauCltFrsComponent,
    DetailCmdCltFrsComponent,
    NouvelCommandeCltFrsComponent,
    CategoriesComponent,
    NouvelcategorieComponent,
    UtilisateursComponent,
    NouvelutilisateurComponent,
    ProfilComponent,
    ChangerMdpComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
