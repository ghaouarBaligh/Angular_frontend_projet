import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageMvtStkComponent } from './pages/page-mvt-stk/page-mvt-stk.component';
import { CorrectionComponent } from './pages/correction/correction.component';
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


const routes: Routes = [
  { path: 'correction', 
    component: CorrectionComponent 
  },
  {
    path: 'login',
    component: PageLoginComponent
  },
  {
    path:'inscrire',
    component: PageInscriptionComponent
  },
  {
    path:'',
    component: PageDashboardComponent,
    children: [
      {
        path:'statistiques',
        component: PageStatistiquesComponent
      },
      {
        path:'articles',
        component: PageArticleComponent
      },
      {
        path:'nouvelarticle',
        component: NouvelArticleComponent
      },
      {
        path:'mvt-stk',
        component: PageMvtStkComponent
      },
      {
        path:'clients',
        component: ClientsComponent
      },
      {
        path:'nouvelclient',
        component: NouveauCltFrsComponent,
        data:{origin:'client'}
      },
      {
        path:'commandeclient',
        component: DetailCmdCltFrsComponent,
        data:{origin:'client'}
      },
      {
        path:'fournisseurs',
        component: FournisseurComponent
      },
      {
        path:'nouvelfournisseur',
        component: NouveauCltFrsComponent,
        data:{origin:'fournisseur'}
      },
      {
        path:'commandefournisseur',
        component: DetailCmdCltFrsComponent,
        data:{origin:'fournisseur'}
      },
      {
        path:'nouvelcommandefrs',
        component: NouvelCommandeCltFrsComponent,
        data:{origin:'fournisseur'}
      },
      {
        path:'nouvelcommandeclt',
        component: NouvelCommandeCltFrsComponent,
        data:{origin:'client'}
      },
      {
        path:'categories',
        component: CategoriesComponent
      },
      {
        path:'nouvelcategorie',
        component: NouvelcategorieComponent
      },
      {
        path:'utilisateurs',
        component: UtilisateursComponent
      },
      {
        path:'nouvelutilisateur',
        component: NouvelutilisateurComponent
      },
      {
        path:'profil',
        component: ProfilComponent
      },
      {
        path:'changermdp',
        component: ChangerMdpComponent
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


