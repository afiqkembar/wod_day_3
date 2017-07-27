function duplicate(c)
{
  for(var i = 0; i <= c.length; i++)
  {
    for(var j = 1; j < i; j++)
      {
        if(c[i] == c[j+1])
        {
          return true;
        }
        else
        {
          return false;
        }
      }
  }
}
document.write(duplicate([4,5,1,4]));
