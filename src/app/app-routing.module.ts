import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router";
import { LoginPage } from "./pages/login/login.page";
import { PokemonCataloguePage } from "./pages/pokemon-catalogue/pokemon-catalogue.page";
import { TrainerPage } from "./pages/trainer/trainer.page";

const routes: Routes = [
    {
        path: "",
        component: LoginPage
    },
    {
        path: "trainer",
        component: TrainerPage
    },
    {
        path: "pokemon-catalogue",
        component: PokemonCataloguePage
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ], // Import a module
    exports: [
        RouterModule
    ] // Expose module and its features
})
export class AppRoutingModule {

}
