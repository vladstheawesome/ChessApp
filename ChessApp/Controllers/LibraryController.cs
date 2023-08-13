using Microsoft.AspNetCore.Mvc;

namespace ChessApp.Controllers
{
    public class LibraryController : Controller
    {
        public IActionResult Index()
        {
            ViewData["PageTitle"] = "Library";
            return View();
        }
    }
}
