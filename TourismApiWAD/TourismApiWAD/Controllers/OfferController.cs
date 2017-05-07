using System;
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
    public class OfferController : ApiController
    {

        private TourismApiWADContext db = new TourismApiWADContext();

        // GET: api/offer
        public IQueryable<Offer> Getoffer()
        {
            return db.Offer;
        }

        // GET: api/offer/5
        [ResponseType(typeof(Offer))]
        public IHttpActionResult Getoffer(int id)
        {
            Offer offer = db.Offer.Find(id);
            if (offer == null)
            {
                return NotFound();
            }

            return Ok(offer);
        }

        // PUT: api/offer/5
        [ResponseType(typeof(void))]
        public IHttpActionResult Putoffer(int id, Offer offer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != offer.OfferId)
            {
                return BadRequest();
            }

            db.Entry(offer).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!offerExists(id))
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

        // POST: api/offer
        [ResponseType(typeof(Offer))]
        public IHttpActionResult Postoffer(Offer offer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Offer.Add(offer);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = offer.OfferId }, offer);
        }

        // DELETE: api/offer/5
        [ResponseType(typeof(Offer))]
        public IHttpActionResult Deleteoffer(int id)
        {
            Offer offer = db.Offer.Find(id);
            if (offer == null)
            {
                return NotFound();
            }

            db.Offer.Remove(offer);
            db.SaveChanges();

            return Ok(offer);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool offerExists(int id)
        {
            return db.Offer.Count(e => e.OfferId == id) > 0;
        }
    }
}
