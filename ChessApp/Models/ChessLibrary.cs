using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace ChessApp.Models
{
    public class ChessLibrary
    {
        [Key]
        public Guid id { get; set; }

        [DisplayName("Library Name")]
        public string name { get; set; }

        //Standard in every table to track updates
        public Guid? lastuser { get; set; }

        [StringLength(50)]
        public string lastusername { get; set; }

        public DateTime createdtime { get; set; }

        public DateTime modifiedtime { get; set; }
        public decimal inuse { get; set; }
    }
}
