using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Logging;

namespace StudyManagementApp.Pages
{
  public class StudyModel : PageModel
  {
    private readonly ILogger<StudyModel> _logger;

    public StudyModel(ILogger<StudyModel> logger)
    {
      _logger = logger;
    }

    public void OnGet()
    {
      
    }
  }
}
