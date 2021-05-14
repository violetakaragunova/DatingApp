using System;

namespace API.Extensions
{
    public static class DateTimeExtensions
    {
        public static int CalculateAge(this DateTime dob){
            int age = DateTime.Now.Year - dob.Year;
            if(dob.AddYears(age) > DateTime.Now)
            age--;
            
            return age;
        } 
    }
}