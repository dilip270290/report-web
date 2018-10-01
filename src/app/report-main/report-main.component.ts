import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-report-main',
  templateUrl: './report-main.component.html',
  styleUrls: ['./report-main.component.css']
})
export class ReportMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	$(document).ready(function() {
	  function setHeight() {
	    let windowHeight = $(window).innerHeight();
	    let reportMenu = $('.report_menu_section').height();
	    let headerView = $('.header_view').height();
	    
	    let removeHeight = windowHeight - reportMenu - headerView - 42;

	    $('.container-fluid').css("height", removeHeight);

	     //console.log(menuIcon, userProfile, removeHeight, windowHeight);
	  };
	  setHeight();
	  
	  $(window).resize(function() {
	    setHeight();
	  });
	});

	$(document).ready(function() {
	  function setHeight1() {
	    let windowHeight = $(window).innerHeight();
	    let reportMenu = $('.report_menu_section').height();
	    let headerView = $('.header_view').height();
	    let rightHeaderView = $('.right_header_view').height();
	    
	    let removeHeight = windowHeight - reportMenu - headerView - rightHeaderView - 60;

	    $('.report_table_view').css("height", removeHeight);

	     //console.log(menuIcon, userProfile, removeHeight, windowHeight);
	  };
	  setHeight1();
	  
	  $(window).resize(function() {
	    setHeight1();
	  });
	});
  }
}
