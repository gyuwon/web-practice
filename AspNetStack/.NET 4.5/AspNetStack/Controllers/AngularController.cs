using System;
using System.Linq;
using System.Reflection;
using System.Web.Mvc;

namespace AspNetStack.Controllers
{
    public class AngularController : Controller
    {
        private static readonly string LastStep = AngularController.GetLastStepActionName();

        private static string GetLastStepActionName()
        {
            Type t = typeof(AngularController);
            MethodInfo action = (
                from m in t.GetMethods(BindingFlags.Public | BindingFlags.Instance)
                where
                    (
                        m.ReturnType.Equals(typeof(ActionResult)) ||
                        m.ReturnType.IsSubclassOf(typeof(ActionResult))
                    ) &&
                    m.Name.StartsWith("Step")
                orderby m.Name descending
                select m
            ).FirstOrDefault();
            return action == null ? string.Empty : action.Name;
        }

        public ActionResult Index()
        {
            return this.RedirectToAction(AngularController.LastStep);
        }

        public ActionResult Step00()
        {
            return View();
        }

        public ActionResult Step01()
        {
            return View();
        }
    }
}
