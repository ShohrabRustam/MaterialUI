import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TypographyComponent } from './typography/typography.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { IconsComponent } from './icons/icons.component';
import { BadgesComponent } from './badges/badges.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MenusComponent } from './menus/menus.component';
import { ListComponent } from './list/list.component';
import { GridlistComponent } from './gridlist/gridlist.component';
import { PanelComponent } from './panel/panel.component';
import { CardComponent } from './card/card.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CheckBoxRadioButtonComponent } from './check-box-radio-button/check-box-radio-button.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SanckbarComponent } from './sanckbar/sanckbar.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonsComponent,
    ButtonToggleComponent,
    IconsComponent,
    BadgesComponent,
    ProgressSpinnerComponent,
    NavbarComponent,
    SideNavComponent,
    MenusComponent,
    ListComponent,
    GridlistComponent,
    PanelComponent,
    CardComponent,
    TabsComponent,
    StepperComponent,
    InputComponent,
    SelectComponent,
    AutocompleteComponent,
    CheckBoxRadioButtonComponent,
    DatePickerComponent,
    TooltipComponent,
    SanckbarComponent,
    DialogComponent,
    DialogExampleComponent,
    TableComponent,
  ],
  entryComponents:[DialogExampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // import materialModule (CustomModule )
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
