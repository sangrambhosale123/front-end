import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { usernameService } from '../services/usernameService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctordashboard',
  templateUrl: './doctordashboard.component.html',
  styleUrls: ['./doctordashboard.component.css']
})
export class DoctordashboardComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    username:string|undefined;

  constructor(private breakpointObserver: BreakpointObserver, private usernameService:usernameService,private router:Router) {}

  ngOnInit(): void {
    let user = localStorage.getItem('user');
    if(!user){
      alert('Please Login First');
      this.router.navigateByUrl('');
    }
    this.username = this.usernameService.getUsername();
  }

}
