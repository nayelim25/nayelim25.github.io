var counter = 0;
const Submit = document.querySelector('#Submit');

const correctAnswers = ['zeniors', 'Wrecker', 'Elmore','colFel', 'Penny1', 'Carrie2', 'Chihuahua','Josh','Chris Morris','Clayton']

Submit.onclick = function()
{
for(correctAnswer in correctAnswers)
    {
        console.log(`input[name="Q${parseInt(correctAnswer) + 1}"]`)
        var rbs = document.querySelectorAll(`input[name="Q${parseInt(correctAnswer) + 1}"]`)
        var selectedValue;
        for (const rb of rbs){
            if(rb.checked)
            {
                selectedValue = rb.value;
                if(selectedValue == correctAnswers[correctAnswer])
                {
                    counter++;
                }
            }
        }
    }
    alert("Your total score is " + counter + " out " + correctAnswers.length + ".");
    counter = 0;


document.querySelector('input[name="Q1"]:checked').checked = false;
document.querySelector('input[name="Q2"]:checked').checked = false;
document.querySelector('input[name="Q3"]:checked').checked = false;
document.querySelector('input[name="Q4"]:checked').checked = false;
document.querySelector('input[name="Q5"]:checked').checked = false;
document.querySelector('input[name="Q6"]:checked').checked = false;
document.querySelector('input[name="Q7"]:checked').checked = false;
document.querySelector('input[name="Q8"]:checked').checked = false;
document.querySelector('input[name="Q9"]:checked').checked = false;
document.querySelector('input[name="Q10"]:checked').checked = false;


};