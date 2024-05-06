import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ResearchService } from 'src/app/services/research.service';

@Component({
  selector: 'app-detail-research',
  templateUrl: './detail-research.component.html',
  styleUrls: ['./detail-research.component.css']
})
export class DetailResearchComponent implements OnInit {

  constructor(
    public researchService: ResearchService, 
    private router:Router,
    private toastrService: ToastrService,
    private activateRoute: ActivatedRoute
  ) { }

  research: any=[];

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params?.["id"];
    this.researchService.detail(id).subscribe(data => {
      this.research = data;
      console.log(data);
      
    },
    err => {
      this.toastrService.error(err.error.message, 'Fail', {
        timeOut: 3000, positionClass: 'toast-top-right',
      });
      this.router.navigate(['/']);
    }
    )
    
  }

}
