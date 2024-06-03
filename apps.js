PROCEDURE swap(VAR xp, VAR yp : INTEGER)
VAR
   tmp : INTEGER;
BEGIN
  tmp := xp;
  xp := yp;
  yp := tmp;
END

PROCEDURE insertion_sort(arr: ARRAY OF INTEGER)
VAR
  i, j, key : INTEGER
BEGIN
  FOR i := 2 TO LENGTH(arr) DO
  BEGIN
    key := arr[i]
    j := i - 1

    -- Move elements of arr[1..i-1], that are greater than key, to one position ahead
    -- of their current position
    WHILE j >= 1 AND arr[j] > key DO
    BEGIN
      arr[j + 1] := arr[j]
      j := j - 1
    END

    arr[j + 1] := key
  END
END

-- Example usage
VAR arr: ARRAY OF INTEGER
BEGIN
  arr := [0, 5, 2, 9, 1, 5]  -- Assume index starts at 1 for simplicity
  insertion_sort(arr)
  
  -- Printing the sorted array
  FOR i := 1 TO LENGTH(arr) DO
    PRINT(arr[i])
  END
END
