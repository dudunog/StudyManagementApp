using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.AspNetCore.Identity;

namespace StudyManagementApp
{
  public class Startup
  {
    public Startup(IConfiguration configuration)
    {
      Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddRazorPages(options => 
      {
        options.Conventions.AddPageRoute("/Login", "/entrar");
        options.Conventions.AddPageRoute("/Register", "/cadastro");

        options.Conventions.AddPageRoute("/Study", "/estudar");
        options.Conventions.AddPageRoute("/Subjects", "/materias");
        options.Conventions.AddPageRoute("/Revisions", "/revisoes");
        options.Conventions.AddPageRoute("/Studies", "/estudos");
        options.Conventions.AddPageRoute("/Results", "/resultados");
        options.Conventions.AddPageRoute("/Tests", "/provas");
        options.Conventions.AddPageRoute("/Simulations", "/simulados");
        options.Conventions.AddPageRoute("/Profile", "/perfil");
      });
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }
      else
      {
        app.UseExceptionHandler("/Error");
        // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
        app.UseHsts();
      }

      app.UseHttpsRedirection();
      app.UseStaticFiles();

      app.UseRouting();

      app.UseAuthorization();

      app.UseEndpoints(endpoints =>
      {
        endpoints.MapRazorPages();
      });
    }
  }
}
