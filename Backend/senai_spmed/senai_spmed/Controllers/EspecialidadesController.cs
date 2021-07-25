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
    public class EspecialidadesController : ControllerBase
    {
        private IEspecialidadeRepository _especialidadeRepository { get; set; }

        EspecialidadesController()
        {
            _especialidadeRepository = new EspecialidadeRepository();
        }

        [HttpGet]
        public IActionResult ListarTodos()
        {
            try
            {
                return Ok(_especialidadeRepository.ListarTodos());
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }

        [HttpGet("{idEspecialidade}")]
        public IActionResult BuscarPorId(int idEspecialidade)
        {
            try
            {
                return Ok(_especialidadeRepository.BuscarPorId(idEspecialidade));
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }

        [HttpPost]
        public IActionResult Cadastrar(Especialidade novaEspecialidade)
        {
            try
            {
                _especialidadeRepository.Cadastrar(novaEspecialidade);

                return StatusCode(201);
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }

        [HttpPut("{idEspecialidade}")]
        public IActionResult Atualizar(int idEspecialidade, Especialidade especialidadeAtualizada)
        {
            try
            {
                _especialidadeRepository.Atualizar(idEspecialidade, especialidadeAtualizada);

                return StatusCode(204);
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }

        [HttpDelete("{idEspecialidade}")]
        public IActionResult Deletar(int idEspecialidade)
        {
            try
            {
                _especialidadeRepository.Deletar(idEspecialidade);

                return StatusCode(204);
            }
            catch (Exception erro)
            {

                return BadRequest(erro);
            }
        }
    }
}
