import { AfterContentInit, Component, OnInit, ViewChild} from '@angular/core';
declare var google;
var lat1 = {lat: 36.972903, lng: -122.105139};
var lat2 = {lat:36.978710 , lng:-122.027300};

var name1 = "City of Santa Cruz Resource Recovery Facility";
var name2 = "Ecology Action Composting";

@Component({
  selector: 'app-nearestlocations',
  templateUrl: 'nearestlocations.page.html',
  styleUrls: ['nearestlocations.page.scss'],
})
export class nearestlocationsPage implements OnInit, AfterContentInit {
  map;
  @ViewChild('mapElement', {static : true}) mapElement;
  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.map = new google.maps.Map(
        this.mapElement.nativeElement,
        {
          center: {lat: 36.973698, lng:  -122.054687},
          zoom: 12
        });
 
        var mark1 = new google.maps.Marker({
          position: lat1,
          title: name1
        });
        var mark2 = new google.maps.Marker({
          position: lat2,
          title: name2
        });
        
        mark1.setMap(this.map);
        mark2.setMap(this.map);
  }
}
