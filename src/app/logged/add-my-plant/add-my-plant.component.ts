import { Component, OnInit, ViewChild } from '@angular/core';
import { Plant } from '../../shared/models/plant.model';
import { ApiService } from '../../shared/services/api.service';
import { CategPlant } from '../../shared/models/categ_plant.model';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-my-plant',
  templateUrl: './add-my-plant.component.html',
  styleUrl: './add-my-plant.component.scss'
})
export class AddMyPlantComponent implements OnInit{
  @ViewChild('dialogAddPlant') dialogAddPlant: any;
  showQuestion: boolean = true;
  searchForm: FormGroup;
  resultSearch: Plant[] | undefined = undefined;
  plantChosen: Plant | undefined = undefined;

  quantity: number = 1;

  constructor(
    private fb: FormBuilder,
    public apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.searchForm = this.fb.group({
      plant: ['', Validators.required],
    });
  }

  getSearch(){
    this.showQuestion = false;
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

  
  openModalAddPlant(plant: Plant) {
    this.dialogAddPlant.nativeElement.showModal();
    this.plantChosen = plant;
  }

  validAddPlant(){
    let req={
      plant_id: this.plantChosen?.id,
      number_to_add: this.quantity,
    }
    this.apiService.requestApi('/api/user/addInGarden/', 'POST', req);
    this.router.navigate(['/']);
  }

}
