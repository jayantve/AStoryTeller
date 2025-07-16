# Pandas Module

#### Pandas is a core Python library for data analysis, offering efficient data structures like Series and DataFrame for tabular data.

## Installation

#### Use the package manager `pip`  to install foobar.

```bash
pip install pandas
```

## Core Data Structures

### Series
#### 1D labeled array.

```python
# imports
import pandas as pd

# Creating a Series
s = pd.Series([1, 3, 5], index=['a', 'b', 'c'])

# Printing
print(s)
```

### Data Frame
#### 2D labeled table with columns of different types.

```python
# imports
import pandas as pd

# Creating Data
data = { 'Name': ['Alice', 'Bob'], 
          'Age': [25, 30]
       }

# Creating  DataFrame 
df = pd.DataFrame(data)

# Printing
print(df)
```

## Basic Operations

### Reading and Writing Data
#### Handles CSV(Comma Seperated Value), Excel, etc.

```python
# imports
import pandas as pd

df = pd.DataFrame({'P': ['A', 'B'], 'Pr': [100, 150]})

# Creating csv 
df.to_csv('sample.csv', index=False)

# Reading Data from csv
df_from_csv = pd.read_csv('sample.csv')

# Printing
print(df_from_csv)
 ```

### Viewing Data
#### Inspect DataFrame contents.

```python
# imports
import pandas as pd
import numpy as np

# Creating Data
df = pd.DataFrame(np.random.rand(5, 3))

# Printing 
print(df.head(2))
print(df.describe())
```

### Selection and Indexing
#### Access data by label `.loc[]`, position `.iloc[]`, or condition.

``` python
# imports 
import pandas as pd

# Creating Data Frame
df = pd.DataFrame(
 {'N': ['A', 'B'],
 'Ag': [25, 30]},
 index=['P1', 'P2'])

# Printing
print(df['N'])
print(df.loc['P1'])
print(df[df['Ag'] > 25])
```

### Handling Missing Data
#### Drop or fill NaN values.

```python
# imports 
import pandas as pd
import numpy as np

# Creating a Data Frame
df = pd.DataFrame({'A': [1, np.nan, 3]})

# Printing 
print(df.dropna())
print(df.fillna(0))
```

### Group By
#### Aggregate data based on categories.

```python
# imports
import pandas as pd 

# Creating DataFrame
df = pd.dataFrame({'D':['S','H'],'Sal':[60000,50000]})

# Printing
print(df.groupby('D')['Sal'].mean())
```


### Merging & Concatenating
#### Combine DataFrames (merge for joins, concat for stacking).

```python
# imports
import pandas as pd

# Creating DataFrame 1 for Merging
df1 = pd.DataFrame({ 'k': ['K0'],'A': ['A0']})

# Creating DataFrame 2 for Merging
df1 = pd.DataFrame({ 'k': ['K0'],'B': ['B0']})

# Creating merged DataFrame
merged_df = pd.merge(df1, df2, on='k')

# Printing
print(df)
```

### Conclusion
#### Pandas is crucial for data manipulation in Python. This README.md provides a concise overview.
