package com.example.scooteq

import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.navigation.fragment.findNavController
import com.example.scooteq.databinding.RegisterFragmentBinding

class FragmentRegister : Fragment() {
    private lateinit var binding: RegisterFragmentBinding

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        binding = RegisterFragmentBinding.inflate(inflater, container, false)
        val view = binding.root

        binding.btnNext.setOnClickListener {
            findNavController().navigate(R.id.action_fragmentRegister_to_fragmentMainScreen)
        }

    return view
    }
}