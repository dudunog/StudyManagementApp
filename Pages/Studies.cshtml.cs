using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace StudyManagementApp.Pages
{
  [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
  public class StudiesModel : PageModel
  {
  public string RequestId { get; set; }

  public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);

  private readonly ILogger<StudiesModel> _logger;

  public StudiesModel(ILogger<StudiesModel> logger)
  {
    _logger = logger;
  }

  public void OnGet()
  {
    RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
  }
  }
}
