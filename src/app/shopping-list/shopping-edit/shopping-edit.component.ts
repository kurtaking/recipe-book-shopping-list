import {Component, OnInit, ElementRef, ViewChild, EventEmitter, Input, Output} from '@angular/core';

import {Ingredient} from "../../shared/models/ingredient.model";
import {LoggingService} from "../../shared/services/logging.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
  providers: [LoggingService]
})

export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private loggingService: LoggingService) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;

    const newIngredient = new Ingredient(ingredientName, ingredientAmount);
    this.ingredientAdded.emit(newIngredient);

    this.loggingService.logToConsole(
      "Your shopping list has been updated:\nIngredient: " + ingredientName + "\nAmount: " + ingredientAmount
    );

  }

}
