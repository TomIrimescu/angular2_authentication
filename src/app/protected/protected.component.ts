import { Component } from "@angular/core";

@Component({
    template: `
        <h2>Protected - you shouldn't be here if not signed in</h2>
    `
})
export class ProtectedComponent {
}