#pragma checksum "/home/eduardo/Documents/git-projects/StudyManagementApp/Pages/Studies.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "b2c02d0356c36deecaab2413e9ce8f1c0a566cec"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(StudyManagementApp.Pages.Pages_Studies), @"mvc.1.0.razor-page", @"/Pages/Studies.cshtml")]
namespace StudyManagementApp.Pages
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "/home/eduardo/Documents/git-projects/StudyManagementApp/Pages/_ViewImports.cshtml"
using StudyManagementApp;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"b2c02d0356c36deecaab2413e9ce8f1c0a566cec", @"/Pages/Studies.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"3765c70e481fff37779406a792093bba0836b5b9", @"/Pages/_ViewImports.cshtml")]
    public class Pages_Studies : global::Microsoft.AspNetCore.Mvc.RazorPages.Page
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 3 "/home/eduardo/Documents/git-projects/StudyManagementApp/Pages/Studies.cshtml"
  
  ViewData["Title"] = "Estudos";

#line default
#line hidden
#nullable disable
            WriteLiteral("\n<br /> <br />\n<h1 class=\"title is-4\">Estudos</h1>");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<StudiesModel> Html { get; private set; }
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<StudiesModel> ViewData => (global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<StudiesModel>)PageContext?.ViewData;
        public StudiesModel Model => ViewData.Model;
    }
}
#pragma warning restore 1591
