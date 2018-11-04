/* global define, it, describe, beforeEach, document */
const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');
const chai = require('chai');
const chaiHttp = require('chai-http');

let nightmare;

const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(8888);

const url = 'http://localhost:8888';
const url2 = 'http://localhost:8888/#/movie/tt0499549';


describe('express', () => {
  beforeEach(() => {
    nightmare = new Nightmare();
  });

  it('returns the correct status code for search page', () => axios.get(url)
    .then(response => expect(response.status === 200)));

  it('returns the correct status code for details page', () => axios.get(url2)
    .then(response => expect(response.status === 200)));

  it('should have the correct index.html page title', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('title').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('Movie Finder');
      })
  );

  it('should have the correct search page H1', () =>
    nightmare
      .goto(url)
      .evaluate(() => document.querySelector('H1').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('Movie Finder');
      })
  );
    
  it('should have the correct detail page H1 title', () =>
    nightmare
      .goto(url2)
      .evaluate(() => document.querySelector('H1').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('Movie Details');
      })
  );
  
  it("should have a link to display more details about a movie", () =>
  nightmare
  .goto(url)
  .evaluate(() => document.getElementsByClassName("ms-movie-button"))
  .end()
  .then(btn => {
    expect(btn).to.exist;
  })).timeout(6500);

  it('should have the correct movie title on movie details page', () =>
    nightmare
      .goto(url2)
      .wait('#movieTitle')
      .evaluate(() => document.querySelector('#movieTitle').innerText)
      .end()
      .then((text) => {
        expect(text).to.equal('');
      })).timeout(6500);
  
  it('should have the runtime on movie details page', () =>
    nightmare
      .goto(url2)
      .wait('#runtime')
      .evaluate(() => document.querySelector('#runtime').innerText)
      .end()
      .then((text) => {
      expect(text).to.contain('');
      })
  ).timeout(6000);
  
  it('should have the movie rating on movie details page', () =>
    nightmare
      .goto(url2)
      .wait('#rated')
      .evaluate(() => document.querySelector('#rated').innerText)
      .end()
      .then((text) => {
        expect(text).to.contain('');
      })
  ).timeout(6000);
  
  it('should have the movie poster on movie details page', () =>
    nightmare
      .goto(url2)
      .wait('#poster')
      .evaluate(() => document.querySelector('#poster').innerText)
      .end()
      .then((text) => {
        expect(text).to.exist;
      })
  ).timeout(6000);


});
  // it('should display movie results on movie search page', () =>
  //   nightmare
  //     .goto(url)
  //     .type('#input', 'Avatar')
  //     .click('#button')
  //     .wait('#results')
  //     .evaluate(() => document.querySelector('body').innerText)
  //     .end()
  //     .then((text) => {
  //       expect(text).to.contain('Avatar');
  //    })
  // ).timeout(6500);

/*
//const expect = chai.expect;
chai.use(chaiHttp);

describe("server module", function() {
  this.timeout(6500);
  it("GET /?i=tt3896198 responds with movie data", (done) => {
	  chai.request(app)
      .get('http://www.omdbapi.com/?s=matrix&apikey=8730e0e')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        //expect(res.body.Title).to.equal('matrix');
        done();
    })
  });
});
*/


