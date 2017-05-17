namespace TourismApiWAD.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial2 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Packages", "Location", c => c.String());
            AddColumn("dbo.Packages", "HotelFacility", c => c.String());
            AddColumn("dbo.Packages", "RoomFacility", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Packages", "RoomFacility");
            DropColumn("dbo.Packages", "HotelFacility");
            DropColumn("dbo.Packages", "Location");
        }
    }
}
