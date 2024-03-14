import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
    selector: 'app-singup',
    standalone: true,
    templateUrl: './singup.component.html',
    styleUrl: './singup.component.css',
    imports: [RouterLink, NavbarComponent, FooterComponent]
})
export class SingupComponent {

}
