import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DeveloperModeComponent } from './components/developer-mode/developer-mode.component';
import {TetrisCoreModule} from 'ngx-tetris';
import { NotFoundComponent } from './components/not-found/not-found.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { TetrisComponent } from './components/tetris/tetris.component';
import { TinderCardComponent } from './components/tinder-card/tinder-card.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AnalyticComponent } from './components/analytic/analytic.component';
import { MatSelectModule } from '@angular/material/select';
import { AiComponent } from './components/ai/ai.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { ChatbotComponent } from './components/chatbot/chatbot.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    DeveloperModeComponent,
    NotFoundComponent,
    TetrisComponent,
    TinderCardComponent,
    AnalyticComponent,
    AiComponent,
    ChatbotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    TetrisCoreModule,
    MatToolbarModule,
    MatMenuModule,
    MatRadioModule,
    FormsModule,
    CommonModule,
    NgxChartsModule,
    MatSelectModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
