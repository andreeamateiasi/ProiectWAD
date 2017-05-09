namespace TourismApiWAD.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Books",
                c => new
                    {
                        BookId = c.Int(nullable: false, identity: true),
                        UserId = c.Int(nullable: false),
                        TripItinerariumId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.BookId);
            
            CreateTable(
                "dbo.TripItinerariums",
                c => new
                    {
                        TripItinerariumId = c.Int(nullable: false, identity: true),
                        PackageId = c.Int(nullable: false),
                        Plane = c.String(),
                        Start = c.DateTime(nullable: false),
                        Finish = c.DateTime(nullable: false),
                        Price = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.TripItinerariumId);
            
            AddColumn("dbo.Packages", "OfferId", c => c.Int(nullable: false));
            AddColumn("dbo.Packages", "DestinationCity", c => c.String());
            AddColumn("dbo.Packages", "Image1", c => c.String());
            AddColumn("dbo.Packages", "Image2", c => c.String());
            AddColumn("dbo.Users", "UserNane", c => c.String());
            DropColumn("dbo.Offers", "Hotel");
            DropColumn("dbo.Offers", "Price");
            DropColumn("dbo.Offers", "StartDate");
            DropColumn("dbo.Offers", "EndDate");
            DropColumn("dbo.Packages", "Destination");
            DropColumn("dbo.Packages", "Plane");
            DropColumn("dbo.Packages", "StartPeriod");
            DropColumn("dbo.Packages", "EndPeriod");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Packages", "EndPeriod", c => c.DateTime(nullable: false));
            AddColumn("dbo.Packages", "StartPeriod", c => c.DateTime(nullable: false));
            AddColumn("dbo.Packages", "Plane", c => c.String());
            AddColumn("dbo.Packages", "Destination", c => c.String());
            AddColumn("dbo.Offers", "EndDate", c => c.DateTime(nullable: false));
            AddColumn("dbo.Offers", "StartDate", c => c.DateTime(nullable: false));
            AddColumn("dbo.Offers", "Price", c => c.Int(nullable: false));
            AddColumn("dbo.Offers", "Hotel", c => c.String());
            DropColumn("dbo.Users", "UserNane");
            DropColumn("dbo.Packages", "Image2");
            DropColumn("dbo.Packages", "Image1");
            DropColumn("dbo.Packages", "DestinationCity");
            DropColumn("dbo.Packages", "OfferId");
            DropTable("dbo.TripItinerariums");
            DropTable("dbo.Books");
        }
    }
}
