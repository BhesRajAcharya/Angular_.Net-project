using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Razor.TagHelpers;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly FullstackDbContext _context;
        public EmployeeController(FullstackDbContext context)
        {
            this._context = context;

        }
        [HttpGet]
        public async Task<IActionResult> GetAllEmployees()
        {
            var emp = await _context.employee.ToListAsync();
            return Ok(emp);
        }

        [HttpPost]
        public async Task<IActionResult> AddEmployees([FromBody] Employee emp)
        {
            emp.Id = Guid.NewGuid();
            await _context.employee.AddAsync(emp);
            await _context.SaveChangesAsync();
            return Ok(emp);
        }
        [HttpGet]
        [Route("{id:guid}")]
        public async Task<IActionResult>GetEmployeeById(Guid id)
        {
          var emp=   await _context.employee.FirstOrDefaultAsync(x => x.Id == id);
            if(emp == null)
            {
                return NotFound();
            }
            return Ok(emp);
        }

        [HttpPut]
        [Route("{id:guid}")]
        public async Task<IActionResult>Updateemployee(Guid id, [FromBody] Employee emp)
        {
             var employee= await _context.employee.FindAsync(id);
            if(employee == null)
            {
                return NotFound();
            }
            employee.Name = emp.Name;
            employee.Email = emp.Email;
            employee.Phone = emp.Phone;
            employee.Salary = emp.Salary;
            employee.Department = emp.Department;

            await _context.SaveChangesAsync();
            return Ok(employee);
        }

        [HttpDelete]
        [Route("{id:guid}")]
        public async Task<IActionResult> deleteemployee(Guid id)
        {
            var emp= await _context.employee.FindAsync(id);
            if(emp == null)
            {
                return NotFound();
            }
             _context.Remove(emp);
           await   _context.SaveChangesAsync();
            return Ok(emp);
        }
        
    }
}
