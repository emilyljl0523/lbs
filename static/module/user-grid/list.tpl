<table>
	<thead>
		<thead>
			<tr><th>name</th><th>sex</th><th>age</th></tr>
		</thead>
		<tbody>
			<%each list as item%>
			<tr>
				<%each item as key value%>
				<td><%value%></td>
				<%/each%>
			</tr>
			<%/each%>
		</tbody>
	</thead>
</table>