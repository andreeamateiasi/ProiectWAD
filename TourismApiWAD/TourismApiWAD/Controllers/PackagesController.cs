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
    public class PackagesController : ApiController
    {
        private TourismApiWADContext db = new TourismApiWADContext();

        // GET: api/Packages
        public IQueryable<Package> GetPackage()
        {
            return db.Package;
        }

        // GET: api/Packages/5
        [ResponseType(typeof(Package))]
        public IHttpActionResult GetPackage(int id)
        {
            Package package = db.Package.Find(id);
            if (package == null)
            {
                return NotFound();
            }

            return Ok(package);
        }

        // PUT: api/Packages/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPackage(int id, Package package)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != package.PackageId)
            {
                return BadRequest();
            }

            db.Entry(package).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PackageExists(id))
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

        // POST: api/Packages
        [ResponseType(typeof(Package))]
        public IHttpActionResult PostPackage(Package package)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Package.Add(package);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = package.PackageId }, package);
        }

        // DELETE: api/Packages/5
        [ResponseType(typeof(Package))]
        public IHttpActionResult DeletePackage(int id)
        {
            Package package = db.Package.Find(id);
            if (package == null)
            {
                return NotFound();
            }

            db.Package.Remove(package);
            db.SaveChanges();

            return Ok(package);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PackageExists(int id)
        {
            return db.Package.Count(e => e.PackageId == id) > 0;
        }
    }
}