import { Component, OnInit } from '@angular/core';
import { Plant } from '../../shared/models/plant.model';
import { ApiService } from '../../shared/services/api.service';
import { CategPlant } from '../../shared/models/categ_plant.model';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrl: './plants.component.scss'
})
export class PlantsComponent implements OnInit{
  categs?: CategPlant[] = [];
  plantsOfMonth?: Plant[] = [];
  searchForm: FormGroup;
  resultSearch: Plant[] | undefined = undefined;

  constructor(
    private fb: FormBuilder,
    public apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.searchForm = this.fb.group({
      plant: ['', Validators.required],
    });
      this.apiService.requestApi('/api/plants/').then(
        (data) => {
          this.categs = data;
        },
        (error) => {
          console.log(error);
        },
      );
      this.apiService.requestApi('/api/plant/month').then(
        (data) => {
          this.plantsOfMonth = data;
        },
        (error) => {
          console.log(error);
        },
      );
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const searchQuery = params['search'];
      if (searchQuery) {
        this.searchForm.setValue({ plant: searchQuery });
        this.search();
      }
    });
  };

  async search() {
    let req = {
      searchData: this.searchForm.value['plant'],
    };
    if(req.searchData === ''){
      this.cancelSearch();
      return;
    };

    try {
      let res = await this.apiService.requestApi('/api/search/plant/', 'GET', req);

      // Mettez à jour l'URL avec le paramètre de recherche
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { search: this.searchForm.value['plant'] },
        queryParamsHandling: 'merge',
      });

      this.resultSearch = res;
    } catch (error) {
      console.log(error)
    }
  }

  cancelSearch() {
    this.resultSearch = undefined;

    // Supprimez le paramètre de recherche de l'URL
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { search: null },
      queryParamsHandling: 'merge',
    });
  }

}
