import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { Listing } from '../type';
import { Router } from '@angular/router';
import { ListingsService } from '../listings.service';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})


export class ContactPageComponent implements OnInit {

  email: string = '';
  message: string = '';
  listing: Listing;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingsService: ListingsService
  ) {
    this.listing = {} as Listing;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id !== null){
      this.listingsService.getListingById(id)
      .subscribe((listing) => {
        this.listing = listing;
        this.message = `I would like to buy this property: ${this.listing.name.toLocaleLowerCase()}! `;
      });
    }else {
      console.log('No id');
      
    }
  }

  sendMessage(): void {
    alert('Your message has been sent!');
    this.router.navigateByUrl('/listings');
  }
}
