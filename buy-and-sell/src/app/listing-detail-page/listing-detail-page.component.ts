import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingsService } from '../listings.service';
import { Listing } from '../type';

@Component({
  selector: 'app-listing-detail-page',
  templateUrl: './listing-detail-page.component.html',
  styleUrls: ['./listing-detail-page.component.css']
})
export class ListingDetailPageComponent implements OnInit {

  isLoading: boolean = true;

  listing!: Listing;

  constructor(
    private route: ActivatedRoute,
    private listingsService: ListingsService
  ) {};

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null){ 
      this.listingsService.getListingById(id)
      .subscribe(listing => {
        this.listing = listing;
        this.isLoading = false;
      });
    this.listingsService.addViewToListing(id)
      .subscribe(() => {
        console.log('Views added');
      });
    }else{
      this.isLoading = false;
      return;  // no id, so return early.  No need to make an API call.  We'll just show an empty page. 
    }
  }
}
