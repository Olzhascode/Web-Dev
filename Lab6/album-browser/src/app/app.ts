import {Component, input, output, Input, Output, EventEmitter, Injectable} from '@angular/core';
import {RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';

@Component ({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

@Injectable ({
   providedIn: 'root'
})


export class AppComponent implements OnInit, Ondestroy{
  title = 'album-browser';
  name = input.required<string>;
  age = input<number>(18);
  @Input score: number = 0;

  delete = output<boolean>;
  onDelete(){
    this.delete.emit(this.name);
  }
  @Output() delete = new EventEmitter<boolean>();

  ngOnInit() {
    this.loadData()
  }

  ngOnDestroy(){

  }


}


{{UserName}}
[disabled] = 'isValid'
(click) = 'count = count + 1'
[(ngModel)] = 'SearchItem'

@if (loggedIn){
  <p>W</p>
}
@ else if(isGuest){
  <p>U r G</p>
}
@else {
  <p>Login pls</p>
}


@for (student of students; track student.id){
  <p>{{student.name}}</p>
}

@ empty {
  <p>Pusto</p>
}


@switch (status) {
  @case ('pendibg')
  {
    chtoto
  }
  @case ('active')
  {
    <p>active < /p>
  }

  @default
  {
      hz
  }
}

@for (item of items; track item.id; let i = $index, islast = $last){

}
