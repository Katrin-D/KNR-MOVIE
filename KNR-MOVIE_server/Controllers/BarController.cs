using KNR_MOVIE_server.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace KNR_MOVIE_server.Controllers
{
    public class BarController : ApiController
    {
        // GET: api/Bar
        public List<Bar> Get()
        {
            if (Database.bar.Count == 0)
            {
                Database.bar.AddRange(new[] { new Bar() { number = 1, water = "Кока-кола", liter = 0.5, snack = "петрушка"},
                new Bar() { number = 2, water = "Фанта", liter = 1.0, snack = "укроп"},
                new Bar() { number = 3, water = "Сок", liter = 0.5, snack = "перчик"},});
            }
            return Database.bar;
        }

        // GET: api/Bar/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Bar
        public List<Bar> Post([FromBody]Bar myobject)
        {
            bool edit = false;
            for (int i = 0; i < Database.bar.Count; i++)
            {
                if (Database.bar[i].number == myobject.number)
                {
                    edit = true;
                    break;
                }
            }
            if (edit)
                Database.bar[myobject.number - 1] = myobject;
            else
                Database.bar.Add(myobject);

            return Database.bar;
        }

        // PUT: api/Bar/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Bar/5
        public List<Bar> Delete(int id)
        {
            for (int i = 0; i < Database.bar.Count; i++)
            {
                if (Database.bar[i].number == id)
                    Database.bar.RemoveAt(i);
            }
            return Database.bar;
        }
    }
}
