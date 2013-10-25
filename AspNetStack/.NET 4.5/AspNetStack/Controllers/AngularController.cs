using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Web.Mvc;

namespace AspNetStack.Controllers
{
    public class AngularController : Controller
    {
        private static readonly IEnumerable<string> Steps = AngularController.GetStepActionNames();

        private static IEnumerable<string> GetStepActionNames()
        {
            return (
                from m in typeof(AngularController).GetMethods(BindingFlags.Public | BindingFlags.Instance)
                where
                    (
                        m.ReturnType.Equals(typeof(ActionResult)) ||
                        m.ReturnType.IsSubclassOf(typeof(ActionResult))
                    ) &&
                    m.Name.StartsWith("Step")
                orderby m.Name
                select m.Name
            ).ToList().AsReadOnly();
        }

        public AngularController()
        {
            ViewBag.Steps = Steps;
        }

        public ActionResult Index()
        {
            return RedirectToAction(AngularController.Steps.LastOrDefault());
        }

        public ActionResult Step00()
        {
            return View();
        }

        public ActionResult Step01()
        {
            return View();
        }

        public ActionResult Step02()
        {
            return View();
        }

        public ActionResult Step03()
        {
            return View();
        }
    }
}
