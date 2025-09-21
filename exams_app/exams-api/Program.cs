using Microsoft.EntityFrameworkCore;
using ExamsApi.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Leer connection string desde appsettings (o env var)
var conn = builder.Configuration.GetConnectionString("DefaultConnection");

// Usar Npgsql (PostgreSQL)
builder.Services.AddDbContext<ExamsDbContext>(options =>
    options.UseNpgsql(conn));

// CORS para pruebas locales (frontend)
builder.Services.AddCors(o => o.AddPolicy("AllowAll", p => p.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()));

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors("AllowAll");
app.UseAuthorization();
app.MapControllers();
app.Run();
