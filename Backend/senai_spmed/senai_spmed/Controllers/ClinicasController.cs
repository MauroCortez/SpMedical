using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using senai_spmed.Domains;
using senai_spmed.Interfaces;
using senai_spmed.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai_spmed.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ClinicasController : ControllerBase
    {
        private IClinicaRepository _clinicarRepository { get; set; }

        public ClinicasController()
        {
            _clinicarRepository = new ClinicaRepository();
        }

        [HttpGet]
        public IActionResult ListarTodos()
        {
            try
            {
                return Ok(_clinicarRepository.ListarTodos());
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }

        [HttpGet("{idClinica}")]
        public IActionResult BuscarTodos(int idClinica)
        {
            try
            {
                return Ok(_clinicarRepository.BuscarPorId(idClinica));
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }

        [HttpPost]
        public IActionResult Cadastrar(Clinica novaClinica)
        {
            try
            {
                _clinicarRepository.Cadastrar(novaClinica);

                return StatusCode(201);
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }

        [HttpPut("{idClinica}")]
        public IActionResult Atualizar(int idClinica, Clinica clinicaAtualizada)
        {
            try
            {
                _clinicarRepository.Atualizar(idClinica, clinicaAtualizada);

                return StatusCode(204);
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }

        [HttpDelete("{idClinica}")]
        public IActionResult Deletar(int idClinica)
        {
            try
            {
                _clinicarRepository.Deletar(idClinica);

                return StatusCode(204);
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }
    }
}
