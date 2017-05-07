using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace TourismApiWAD.Models
{
    public class Offer
    {
        
        public int OfferId { get; set; }
        public string Destination { get; set; }
        public string Hotel { get; set; }
        public int Price { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public virtual ICollection<Package> Package { get; set; }

    }
}


