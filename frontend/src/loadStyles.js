const requireContext = require.context('./', true, /\.css$/);
requireContext.keys().forEach(requireContext);