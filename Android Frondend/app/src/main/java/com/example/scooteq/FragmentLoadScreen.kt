package com.example.scooteq

import android.os.Bundle
import android.os.Handler
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.navigation.fragment.findNavController
import com.example.scooteq.databinding.LoadScreenFragmentBinding


class FragmentLoadScreen : Fragment(R.layout.load_screen_fragment) {
    private lateinit var binding: LoadScreenFragmentBinding

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        binding = LoadScreenFragmentBinding.inflate(inflater, container, false)
        val view: View = binding.root

        return view
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        Handler().postDelayed({
            findNavController().navigate(R.id.action_fragmentLoadScreen_to_fragmentLoginScreen)
        } ,3000)
    }
}

