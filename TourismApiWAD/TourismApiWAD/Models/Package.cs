using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;


namespace TourismApiWAD.Models
{
    public class Package
    {
        public int PackageId { get; set; }
        public string Destination { get; set; }
        public string Plane { get; set; }
        public DateTime StartPeriod { get; set; }
        public DateTime EndPeriod { get; set; }
        public string Hotel { get; set; }
        public string Food { get; set; }
        public int NoPassengers { get; set; }
        public int Price { get; set; }

    }
}