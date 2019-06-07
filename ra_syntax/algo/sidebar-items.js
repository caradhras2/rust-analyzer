initSidebarItems({"enum":[["TokenAtOffset","There might be zero, one or two leaves at a given offset."]],"fn":[["ancestors_at_offset","Returns ancestors of the node at the offset, sorted by length. This should do the right thing at an edge, e.g. when searching for expressions at `{ <|>foo }` we will get the name reference instead of the whole block, which we would get if we just did `find_token_at_offset(...).flat_map(|t| t.parent().ancestors())`."],["find_covering_element",""],["find_node_at_offset","Finds a node of specific Ast type at offset. Note that this is slightly imprecise: if the cursor is strictly between two nodes of the desired type, as in"],["find_token_at_offset",""],["non_trivia_sibling","Finds the first sibling in the given direction which is not `trivia`"]],"mod":[["visit",""]]});