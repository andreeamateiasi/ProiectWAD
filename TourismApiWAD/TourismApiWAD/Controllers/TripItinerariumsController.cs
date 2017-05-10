﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using TourismApiWAD.Models;

namespace TourismApiWAD.Controllers
{
    public class TripItinerariumsController : ApiController
    {
        private TourismApiWADContext db = new TourismApiWADContext();

        // GET: api/TripItinerariums
        public IQueryable<TripItinerarium> GetTripItinerarium()
        {
            return db.TripItinerarium;
        }

        // GET: api/TripItinerariums/5
        [ResponseType(typeof(TripItinerarium))]
        public IHttpActionResult GetTripItinerarium(int id)
        {
            TripItinerarium tripItinerarium = db.TripItinerarium.Find(id);
            if (tripItinerarium == null)
            {
                return NotFound();
            }

            return Ok(tripItinerarium);
        }

        // PUT: api/TripItinerariums/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTripItinerarium(int id, TripItinerarium tripItinerarium)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != tripItinerarium.TripItinerariumId)
            {
                return BadRequest();
            }

            db.Entry(tripItinerarium).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TripItinerariumExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/TripItinerariums
        [ResponseType(typeof(TripItinerarium))]
        public IHttpActionResult PostTripItinerarium(TripItinerarium tripItinerarium)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.TripItinerarium.Add(tripItinerarium);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = tripItinerarium.TripItinerariumId }, tripItinerarium);
        }

        // DELETE: api/TripItinerariums/5
        [ResponseType(typeof(TripItinerarium))]
        public IHttpActionResult DeleteTripItinerarium(int id)
        {
            TripItinerarium tripItinerarium = db.TripItinerarium.Find(id);
            if (tripItinerarium == null)
            {
                return NotFound();
            }

            db.TripItinerarium.Remove(tripItinerarium);
            db.SaveChanges();

            return Ok(tripItinerarium);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool TripItinerariumExists(int id)
        {
            return db.TripItinerarium.Count(e => e.TripItinerariumId == id) > 0;
        }
    }
}