import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-scopes',
  templateUrl: './scopes.component.html',
  styleUrls: ['./scopes.component.css']
})
export class ScopesComponent implements OnInit {

  ngOnInit() {
    const inputs = Array.from(document.querySelectorAll('.controls input'));

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
  }

}
