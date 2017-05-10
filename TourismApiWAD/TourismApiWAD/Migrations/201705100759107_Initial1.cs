namespace TourismApiWAD.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial1 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Offers", "Image", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Offers", "Image");
        }
    }
}
